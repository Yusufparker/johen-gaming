import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FormFrame from "../components/ui/form-frame";

import CustomerDataForm, { type CustomerData } from "../components/account-checkout/customer-data-form";
import PromoCodeInput from "../components/topup/partials/promo-code-input";
import PaymentMethodInput from "../components/payment/payment-method-input";
import AccountOrderSummary from "../components/account-checkout/account-order-summary";

import type { PaymentMethod } from "../types";
import { useGetAccountByID } from "../hooks/useJBAccount";
import NotFound from "../components/not-found";

const AccountCheckout = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product } = useGetAccountByID(id!);
    const [customerData, setCustomerData] = useState <CustomerData>({
        fullName: "",
        email: "",
        whatsapp: "",
    });
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
    const [promoCode, setPromoCode] = useState<string>("");
    const navigate = useNavigate();

    if (!product) return <NotFound/>;
    return (
        <div className="mt-15 md:mt-25 bg-[#100021] min-h-screen">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start mt-3">
                    <div>
                        <div className="mb-5">
                            <FormFrame
                                no={1}
                                title="Informasi Pelanggan"
                            >
                                <CustomerDataForm
                                    value={customerData}
                                    onChange={setCustomerData}
                                />
                            </FormFrame>
                        </div>

                        <div className="mb-5">
                            <FormFrame
                                no={2}
                                title="Kode Promo"
                            >
                                <PromoCodeInput
                                    onApply={(code) =>
                                        setPromoCode(code)
                                    }
                                />
                            </FormFrame>
                        </div>
                        <div className="mb-5">
                            <FormFrame
                                no={3}
                                title="Metode Pembayaran"
                            >
                                <PaymentMethodInput
                                    onSelect={setSelectedPayment}
                                />
                            </FormFrame>
                        </div>
                    </div>
                    <div>
                        <AccountOrderSummary
                            product={{
                                id: product.id,
                                name: product.name,
                                image: product.image,
                                price: product.price,
                            }}
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
            </div>
        </div>
    );
};

export default AccountCheckout;