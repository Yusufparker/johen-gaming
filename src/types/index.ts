
export interface Pagination {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}


export interface GameCategory {
    id : string
    name : string
    slug : string
    icon : string
    image : string
}

export interface GameCategoryResponse {
    data: GameCategory[];
    pagination: Pagination;
}

export type Category = "top-up" | "account" | "voucher"

export interface Product {
    id : string
    name : string
    slug : string
    game : string
    category : Category
    image : string
    banner : string
    description : string
    gameId : string
    popular : boolean
}


export interface ProductResponse {
    data: Product[];
    pagination: Pagination;
}

export interface Promo {
    id : string
    productId : string
    product : string
    game : string
    title : string
    description : string
    category : Category
    originalPrice : number
    discountPrice : number
    discountPercent : number
    expiresAt : string
    active : boolean

}

export interface PromoResponse {
    data : Promo[]
    pagination : Pagination
}


export interface Testimoni {
    id : number
    rating : number
    comment : string
    invoiceNumber : string
    username : string
    phoneNumber : string
    productName : string
    createdAt : string
    updatedAt : string
}

export interface TestimoniResponse {
    data : Testimoni[]
    pagination : Pagination
}

export interface Faq {
    question: string
    answer: string
}

export interface TopupItem {
    id : string
    productId : string
    category : string
    title : string
    description : string
    amount : number
    price : number
}


export interface AccountProduct {
    id : string
    name : string
    game : string
    category : "account"
    image : string
    description : string
    specs : string
    price : number
    qty : number
}

export interface TopupProductDetail extends Product {
    items: TopupItem[];
}


export interface CustomerField {
    key: string
    label: string
    placeholder?: string
    colSpan?: "full" | "half"
    inputType?: "text" | "number" | "tel" | "select"
    options?: { label: string; value: string }[]
}
export interface PaymentMethod {
    id: string
    name: string
    logo: string
    category: string
    adminFee?: number  
    adminFeeType?: "flat" | "percent"
}

export interface SearchAccountsParams {
    search?: string;
    sort?: string;
    minPrice?: string;
    maxPrice?: string;
    games?: string[];
    page?: number;
    limit?: number;
}

export interface AccountProductResponse {
    data: AccountProduct[];
    pagination: Pagination;
}

export interface CheckoutState {
    product: {
        id: string
        name: string
        image: string
        price: number
    }
    selectedPayment: PaymentMethod
    customerData: Record<string, string>
    promoCode?: string
    total: number
    selectedItem?: {
        id: string
        title: string
        price: number
    }
}