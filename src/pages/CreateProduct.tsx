import { FormEvent, useState } from 'react'

export const CreateProduct = () => {
  const [newProductName, setNewProductName] = useState<string>('')
  const [newProductDescription, setNewProductDescription] = useState<string>('')
  const [newImage, setNewImage] = useState<string | ArrayBuffer | null>('')
  const [newTypes, setnewTypes] = useState<string>('')
  const [newPrice, setNewPrice] = useState<number>(0)
  const [newStockQuantity, setNewStockQuantity] = useState<number>(0)

  console.log(newProductName)
  console.log(newProductDescription)
  console.log(newImage)
  console.log(newPrice)
  console.log(newStockQuantity)
  console.log(newTypes)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input type="text" onChange={(e) => setNewProductName(e.target.value)} required />
      <label>Product Description</label>
      <input type="text" onChange={(e) => setNewProductDescription(e.target.value)} required />
      <label>Image</label>
      <input type="file" accept="image/" onChange={handleProductImageUpload} required />

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

      <label>Price</label>
      <input type="number" onChange={(e) => setNewPrice(e.target.valueAsNumber)} required />
      <label>Quantity</label>
      <input type="number" onChange={(e) => setNewStockQuantity(e.target.valueAsNumber)} required />
      <div>
        {newImage ? (
          <>
            {' '}
            <img src={newImage as string} alt="product image" />{' '}
          </>
        ) : (
          <p>Image preview will appear here!</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}