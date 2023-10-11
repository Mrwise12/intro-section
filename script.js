const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

const dropdown = new bootstrap.Dropdown(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})


const myDropdown = document.getElementById('myDropdown')
myDropdown.addEventListener('show.bs.dropdown', event => {
  // do something...
})



   
    function updateImage() {
      const container = document.querySelector('.image-container');
      const imgDesktop = container.querySelector('.img-desktop');
      const imgMobile = container.querySelector('.img-mobile');
  
      if (window.innerWidth >= 768) {
        imgDesktop.style.display = 'block';
        imgMobile.style.display = 'none';
      } else {
        imgDesktop.style.display = 'none';
        imgMobile.style.display = 'block';
      }
    }
  
    window.addEventListener('resize', updateImage);
    window.addEventListener('load', updateImage);
  