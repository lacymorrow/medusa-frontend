"use server"

import {
	getVendors
} from "@lib/data"
import { revalidateTag } from "next/cache"

export async function registerVendor(_currentState: unknown, formData: FormData) {

	try {
		await getVendors().then(
			() => {
				revalidateTag("vendor")
			}
		)
	} catch (error: any) {
		return error.toString()
	}
}
