import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "antd";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import {
    selectIsPerfumeLoaded,
    selectIsPerfumeLoading,
    selectPerfume,
    selectPerfumeError,
    selectPerfumeErrorMessage,
    selectReviews
} from "../../redux-toolkit/perfume/perfume-selector";
import { selectIsReviewAdded, selectReviewErrors } from "../../redux-toolkit/user/user-selector";
import { fetchPerfume, fetchReviewsByPerfumeId } from "../../redux-toolkit/perfume/perfume-thunks";
import { resetInputForm } from "../../redux-toolkit/user/user-slice";
import { WEBSOCKET_URL } from "../../constants/urlConstants";
import { resetPerfumeState, setReview } from "../../redux-toolkit/perfume/perfume-slice";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductReviews from "./ProductReviews/ProductReviews";
import { addReviewToPerfume } from "../../redux-toolkit/user/user-thunks";
import { useCart } from "../../hooks/useCart";
import "./Product.css";

let stompClient = null;

const Product = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const params = useParams();
    const perfume = useSelector(selectPerfume);
    const reviews = useSelector(selectReviews);
    const isPerfumeLoading = useSelector(selectIsPerfumeLoading);
    const isPerfumeLoaded = useSelector(selectIsPerfumeLoaded);
    const isPerfumeError = useSelector(selectPerfumeError);
    const errorMessage = useSelector(selectPerfumeErrorMessage);
    const reviewErrors = useSelector(selectReviewErrors);
    const isReviewAdded = useSelector(selectIsReviewAdded);
    const { addToCart } = useCart(perfume?.id);

    useEffect(() => {
        dispatch(fetchPerfume(params.id));
        dispatch(resetInputForm());
        window.scrollTo(0, 0);
        stompClient = Stomp.over(() => new SockJS(WEBSOCKET_URL));
        stompClient.connect({}, () => {
            stompClient?.subscribe("/topic/reviews/" + params.id, (response) => {
                dispatch(setReview(JSON.parse(response.body)));
            });
        });

        return () => {
            stompClient?.disconnect();
            dispatch(resetPerfumeState());
        };
    }, []);

    useEffect(() => {
        if (isPerfumeLoaded) {
            dispatch(fetchReviewsByPerfumeId(params.id));
        }
    }, [isPerfumeLoaded]);

    useEffect(() => {
        form.resetFields();
    }, [isReviewAdded]);

    const addReview = (data) => {
        dispatch(addReviewToPerfume({ perfumeId: params.id, ...data }));
    };

    return (
        <ContentWrapper>
            {isPerfumeLoading ? (
                <Spinner />
            ) : (
                <>
                    {isPerfumeError ? (
                        <ErrorMessage errorMessage={errorMessage} />
                    ) : (
                        <>
                            <ProductInfo perfume={perfume} reviewsLength={reviews.length} addToCart={addToCart} />
                            <ProductReviews
                                reviews={reviews}
                                reviewErrors={reviewErrors}
                                addReview={addReview}
                                form={form}
                            />
                        </>
                    )}
                </>
            )}
        </ContentWrapper>
    );
};

export default Product;
