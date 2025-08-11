
// taken from stack overflow or other resources to show currency model
export const currFormatter = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
});
