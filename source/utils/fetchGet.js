const fetchGet = async (path = "") => {
  console.log(path);
  const res = await fetch(path);
  // console.log(res.text());
  console.log("path");

  return res.json();
};
export { fetchGet };
