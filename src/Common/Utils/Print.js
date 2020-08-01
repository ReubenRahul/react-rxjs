export const print = (append_id, result_text ) => {
  let liEle = document.createElement("li");
  liEle.innerText = result_text;
  document.getElementById(append_id).append(liEle);

}
