import { FormEvent, useState } from 'react'
import useProducts from '../hooks/useProducts'
import { useNavigate } from 'react-router-dom'

export const CreateProduct = () => {
  const { createProduct } = useProducts()
  const navigate = useNavigate()
  const [newProductName, setNewProductName] = useState<string>('')
  const [newProductDescription, setNewProductDescription] = useState<string>('')
  const [newImage, setNewImage] = useState<string | ArrayBuffer | null>('')
  const [newTypes, setnewTypes] = useState<string>('')
  const [newPrice, setNewPrice] = useState<number>(0)
  const [newStockQuantity, setNewStockQuantity] = useState<number>(0)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createProduct({
        name: newProductName,
        description: newProductDescription,
        image: newImage as ArrayBuffer,
        type: newTypes,
        price: newPrice,
        stockQuantity: newStockQuantity,
      })

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (!target.files) {
      return
    }

    const file = target.files[0]
    TranformFile(file)
  }

  const TranformFile = (file: File) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setNewImage(reader.result)
      }
    } else {
      setNewImage('')
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-allPageBg bg-cover ">
      <div className="relative space-y-3 rounded-md bg-white bg-opacity-80 p-6 shadow-xl lg:p-10 border border-gray-100 mt-56 mb-36">
        <form className="grid grid-cols-1" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 mb-3">
            <label>Product Name : </label>
            <input
              type="text"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
              onChange={(e) => setNewProductName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mb-3">
            <label>Product Description : </label>
            <input
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
              type="text"
              onChange={(e) => setNewProductDescription(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mb-4">
            <label className="mb-2">Image</label>
            <input type="file" accept="image/" onChange={handleProductImageUpload} required />
          </div>

          <div className="grid grid-cols-1 mb-4">
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue={newTypes}
              onChange={(e) => setnewTypes(e.target.value)}
              required
            >
              <option value={newTypes} disabled selected>
                Types
              </option>
              <option value={'Coffee Beans'}>Coffee Beans</option>
              <option value={'Equipments'}>Equipments</option>
            </select>
          </div>

          <div className=" grid grid-cols-1 mb-4">
            <label>Price : </label>
            <input
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
              type="number"
              onChange={(e) => setNewPrice(e.target.valueAsNumber)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mb-4">
            <label>Quantity : </label>
            <input
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
              type="number"
              onChange={(e) => setNewStockQuantity(e.target.valueAsNumber)}
              required
            />
          </div>

          <div className="flex my-5 justify-center w-full">
            {newImage ? (
              <img className="rounded-lg w-[150px]" src={newImage as string} alt="product image" />
            ) : (
              <p>Image preview will appear here!</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" mt-5 w-1/4 rounded-md bg-black p-2  text-center font-semibold text-white outline-none focus:ring"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
