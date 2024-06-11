"use server"

import {
	registerAsVendor,
	unregisterAsVendor
} from "@lib/data"
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
		name: formData.get("name"),
		description: formData.get("description"),
	}

	try {
		await updateCustomer(customer).then(() => {
			revalidateTag("customer")
		})
		return { success: true, error: null }
	} catch (error: any) {
		return { success: false, error: error.toString() }
	}
}
