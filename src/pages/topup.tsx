import {useNavigate, Navigate, useParams } from "react-router-dom";

import { useGetProductBySlug } from "../hooks/useProduct";

import Header from "../components/topup/header";
import TopupHeaderSkeleton from "../components/ui/skeletons/topup-header-skeleton";
import FormFrame from "../components/ui/form-frame";

import CustomerInfo from "../components/topup/customer-info";
import TopupItems from "../components/topup/topup-items";
import { useState} from "react";
import type { PaymentMethod, TopupItem } from "../types";
import PromoCodeInput from "../components/topup/partials/promo-code-input";
import PaymentMethodInput from "../components/payment/payment-method-input";
import OrderSummary from "../components/topup/order-summay";

const TopUp = () => {
    const { slug } = useParams<{ slug: string }>();
    const {data: product,isLoading} = useGetProductBySlug(slug!);
    const [customerData, setCustomerData] = useState({});
    const [selectedItem, setSelectedItem] = useState<TopupItem | null>(null);
    const [promoCode, setPromoCode] = useState<string>("");
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
    const navigate = useNavigate();

    return (
        <section className="mt-15 md:mt-25 bg-[#220044]">

            {/* Header */}
            <div>
                {
                    isLoading ? (
                        <TopupHeaderSkeleton />
                    ) : !product || product.category === "account" ? (
                        <Navigate
                            to="/"
                            replace
                        />
                    ) : (
                        <Header product={product} />
                    )
                }
            </div>
            <div className="mx-auto max-w-7xl px-7 pb-20 pt-12">
                {
                    product && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 flex flex-col gap-5">
                                <FormFrame
                                    no={1}
                                    title="Informasi Pelanggan"
                                >

                                    <CustomerInfo
                                        game={product.slug}
                                        onChange={setCustomerData}
                                    />
                                </FormFrame>

                                <FormFrame
                                    no={2}
                                    title="Pilih Nominal"
                                >
                                    <TopupItems
                                        items={product.items}
                                        onSelect={setSelectedItem}
                                    />
                                </FormFrame>
                                <FormFrame
                                    no={3}
                                    title="Kode Promo"
                                >
                                    <PromoCodeInput onApply={setPromoCode} />
                                </FormFrame>
                                <FormFrame
                                    no={4}
                                    title="Pilih Pembayaran"
                                >
                                    <PaymentMethodInput onSelect={setSelectedPayment} />
                                </FormFrame>

                            </div>

                            {/* Right */}
                            <div className="lg:col-span-1">
                                <OrderSummary
                                    product={product}
                                    selectedItem={selectedItem}
                                    selectedPayment={selectedPayment}
                                    customerData={customerData}
                                    promoCode={promoCode}
                                    onSubmit={(data) => {
                                        navigate("/checkout/confirm", {
                                            state: data,
                                        });

                                    }}
                                />
                            </div>

                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default TopUp;