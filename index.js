import { Links } from './links.js';
const linkContainer = document.getElementsByClassName('container')[0];
const fragment = document.createDocumentFragment();
const toast = document.getElementsByClassName('toast')[0];
let length = Links.length;
const displayToast = () =>{
  toast.classList.add('display-toast')
  setTimeout(()=>{
    toast.classList.remove('display-toast')
  },800)
}
const copyToClipboard = (e) => {
  let link = e.currentTarget.getAttribute('data-link')
  var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = link;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);

  displayToast();
};
for (let i = 0; i < length; i++) {
  const iconContainer = document.createElement('div');
  const imgContainer = document.createElement('img');
  iconContainer.setAttribute("data-link",Links[i].link);
  iconContainer.classList.add('social-media-icons');
  imgContainer.src = Links[i].icon;
  imgContainer.height = 30;
  imgContainer.width = 30;
  iconContainer.addEventListener('click', copyToClipboard, true);
  iconContainer.appendChild(imgContainer);
  fragment.appendChild(iconContainer);

}
linkContainer.appendChild(fragment);


