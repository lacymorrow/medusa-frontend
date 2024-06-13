import { getMedusaHeaders } from "@lib/data"
import medusaError from "@lib/util/medusa-error"

// Vendor actions
export async function getVendors() {
	const headers = getMedusaHeaders(["customer", "vendor"])

	console.log(headers)

	const result = await fetch(`http://localhost:9000/store/vendors`, {
		credentials: "include",
		headers,
		next: { tags: ["vendor"] }
	})
		.then((response) => {
			return response
		})
		.then((response) => response.json())
		.catch((err) => medusaError(err))

	console.log("getVendors", result)

	return result
}

export async function getCustomerVendor() {
	const headers = getMedusaHeaders(["customer", "vendor"])

	const result = await fetch(`http://localhost:9000/store/vendors/me`, {
		credentials: "include",
		headers,
		next: { tags: ["vendor"] }
	})
		.then((response) => response.json())
		.catch((err) => medusaError(err))

	return result
}

export async function registerAsVendor() {
	const headers = getMedusaHeaders(["customer", "vendor"])

	const result = await fetch(`http://localhost:9000/store/vendors/me`, {
		credentials: "include",
		method: "POST",
		headers,
		next: { tags: ["vendor"] }
	})
		.then((response) => {
			return response
		})
		.then((response) => response.json())
		.catch((err) => medusaError(err))

	console.log("registerAsVendor", result)

	return result
}

export async function unregisterAsVendor() {
	const headers = getMedusaHeaders(["customer", "vendor"])

	return await fetch(`http://localhost:9000/store/vendors/me`, {
		credentials: "include",
		method: "DELETE",
		headers,
		next: { tags: ["vendor"] }
	})
		.then((response) => response.json())
		.catch((err) => medusaError(err))

}

// Todo: type
export async function updateVendor(data: { name?: string, description?: string }) {
	const headers = getMedusaHeaders(["customer", "vendor"])

	const result = await fetch(`http://localhost:9000/store/vendors/me`, {
		credentials: "include",
		method: "PUT",
		headers,
		next: { tags: ["vendor"] },
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.catch((err) => medusaError(err))

	return result
}

export async function getVendorProducts() {
	const headers = getMedusaHeaders(["vendor-products"])

	return await fetch(`http://localhost:9000/store/vendors/products`, {
		credentials: "include",
		headers,
		next: { tags: ["vendor-products"] },
	})
		.then((response) => response.json())
		.catch((err) => medusaError(err))
}

export async function addVendorProduct(data: { productId: string }) {
	const headers = getMedusaHeaders(["vendor-products"])

	return await fetch(`http://localhost:9000/store/vendors/products`, {
		credentials: "include",
		method: "POST",
		headers,
		next: { tags: ["vendor-products"] },
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.catch((err) => medusaError(err))
}
