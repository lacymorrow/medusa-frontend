"use client"

import { ProductPreviewType } from "@/types/global"
import ErrorMessage from "@modules/checkout/components/error-message"
import { addVendorProductAction } from "@modules/vendor/actions"
import { useFormState } from "react-dom"

const VendorInventorySelect = ({
  products,
  inventory,
}: {
  products: ProductPreviewType[]
  inventory: any // TODO: type
}) => {
  const [message, formAction] = useFormState(addVendorProductAction, null)

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <h1>Choose your inventory</h1>
      </div>
      <div>
        <div>
          <h2>Products</h2>
          <div>
            {products.map((product) => (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <form action={formAction}>
                  <input type="hidden" name="productId" value={product.id} />
                  <button>Add to vendor</button>
                </form>
              </div>
            ))}
            <ErrorMessage error={message} data-testid="vendor-register-error" />
          </div>
        </div>
        <div>
          <h2>Inventory</h2>
          {JSON.stringify(inventory)}
        </div>
      </div>
      {/* <form className="w-full flex flex-col" action={formAction}>
        <SubmitButton
          className="w-full mt-6"
          data-testid="vendor-register-button"
        >
          Unregister
        </SubmitButton>
        <ErrorMessage error={message} data-testid="vendor-register-error" />
      </form> */}
    </div>
  )
}

export default VendorInventorySelect
