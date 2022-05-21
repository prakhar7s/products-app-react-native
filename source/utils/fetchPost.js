const fetchPost = async (path = "", data = {}) => {
  console.log(path);
  let res = null;
  try {
    console.log("dsad");
    res = await fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
  // console.log('sad', res.text(), res.json());
  return res.json();
};
export { fetchPost };
