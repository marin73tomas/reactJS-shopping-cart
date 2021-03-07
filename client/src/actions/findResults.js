const type = "findResults";

const getProductsByTitle = async (title) => {
  try {
    console.log(title);
    const response = await fetch(`/products/bytitle/${title}`);
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error);
  }
};
const findResults = (title) => {
  return {
    type,
    payload: getProductsByTitle(title),
  };
};
export default findResults;
