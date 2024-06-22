// Todo: rewrite with best practices
"use server"

import {
	addVendorProduct,
	registerAsVendor,
	unregisterAsVendor,
	updateVendor
} from "@lib/data/vendor"
import { revalidateTag } from "next/cache"



export async function registerVendorAction(_currentState: unknown, formData: FormData) {
	// Create a new vendor associated with the current customer logged in
	try {
		return await registerAsVendor()
			.then((customer) => {
				revalidateTag("vendor")
				if (customer.error) {
					return customer.error
				}
			})

	} catch (error: any) {
		return error.toString()
	}
}

export async function unregisterVendorAction(_currentState: unknown, formData: FormData) {
	try {
		return await unregisterAsVendor()
			.then((res) => {
				revalidateTag("vendor")
				console.log(res)
				if (res.message) {
					return res.message
				}
			})
	} catch (error: any) {
		console.log(error.toString())
		// return error.toString()
	}
}

export async function updateVendorName(
	_currentState: Record<string, unknown>,
	formData: FormData
) {
	const vendor = {
		name: formData.get("name") as string, // TODO: type
	}

	try {
		await updateVendor(vendor).then(() => {
			revalidateTag("vendor")
		})
		return { success: true, error: null }
	} catch (error: any) {
		return { success: false, error: error.toString() }
	}
}

export async function updateVendorDescription(_currentState: unknown, formData: FormData) {
	const vendor = {
		description: formData.get("description") as string, // TODO: type
	}

	try {
		await updateVendor(vendor).then(() => {
			revalidateTag("vendor")
		})
		return { success: true, error: null }
	} catch (error: any) {
		return { success: false, error: error.toString() }
	}
}

export async function addVendorProductAction(_currentState: unknown, formData: FormData) {
	const product = {
		productId: formData.get("productId") as string,
	}
	try {
		await addVendorProduct(product).then(() => {
			revalidateTag("vendor-products")
		})


	} catch (error: any) {
		console.log(error)
		return error.toString()
	}
}

