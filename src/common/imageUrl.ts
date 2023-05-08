const ogUrl = "api/og";
let ogImage = "";

if (process.env.NODE_ENV === "production") {
	ogImage = process.env.NEXT_PUBLIC_URL + ogUrl;
} else {
	ogImage = "http://localhost:3000/" + ogUrl;
}

export default ogUrl;
