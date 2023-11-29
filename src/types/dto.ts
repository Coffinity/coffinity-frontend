export interface IUserDTO {
  id: string
  username: string
  email: string
  createdAt: Date
}

export interface ICreateUserDTO {
  email: string
  username: string
  password: string
}

export interface ILogin {
  username: string
  password: string
}

export interface IAccessToken {
  accessToken: string
}

export interface ICreateProductDTO {
  name: string
  description: string
  image: ArrayBuffer
  type: string
  price: number
  stockQuantity: number
}

export interface IUpdateProductDTO {
  name: string
  description: string
  image: string
  type: string
  price: number
  stockQuantity: number
}
export interface IProductDTO {
  id: string
  name: string
  image: string
  description: string
  type: string
  price: number
  stockQuantity: number
  createdAt: Date
  updatedAt: Date
}

export interface ICreateCheckoutDTO {
  items: ItemDTO[]
  address: AddressDTO
}
export interface AddressDTO {
  fullname: string
  address_line: string
  province: string
  district: string
  postcode: string
  phone_number: string
}
export interface ItemDTO {
  productId: string
  quantity: number
}
