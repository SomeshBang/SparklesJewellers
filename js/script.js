
// // To keep scrollbar fixed at top position    

// window.onscroll = function() {myFunction()};

// function myFunction() {

//   if (document.documentElement.scrollTop > 5) {
//     document.getElementById("smallNavbar").style.display = "none";
//     document.getElementById("mainNavbarDesign").id = "mainNavbarDesign1"
//   }

//   else {
//     document.getElementById("smallNavbar").style.display = "flex!important";
//     document.getElementById("mainNavbarDesign1").id="mainNavbarDesign"
//   }

// }









// This code work for hovering effect of mega menu
let timeout;

function showSubMenu(menuId) {
  clearTimeout(timeout);

  // Hide all sub-menus
  const subMenus = document.querySelectorAll(".sub-menu");
  subMenus.forEach((menu) => (menu.style.display = "none"));

  // Show the selected sub-menu
  const selectedSubMenu = document.getElementById(`${menuId}-submenu`);
  if (selectedSubMenu) {
    selectedSubMenu.style.display = "block";
  }
}

function hideSubMenu(menuId) {
  timeout = setTimeout(() => {
    const selectedSubMenu = document.getElementById(`${menuId}-submenu`);
    if (selectedSubMenu) {
      selectedSubMenu.style.display = "none";
    }
  }, 100); // Adjust the delay as needed
}

function cancelHideSubMenu(menuId) {
  clearTimeout(timeout);
}
// ===========================================================================


// It will shows Item in mobile version of navbar
function toggleDropdown() {
  var dropdown = document.querySelector('.allJewelDropdown');
  console.log(dropdown)
  dropdown.classList.toggle('active');
}
// ===========================================================================

// For Ipad

// function toggleSubMenuForMobile(submenuId) {
//   var submenu1 = document.getElementById(submenuId + '-submenu');
//   if (submenu1.style.display === 'block') {
//       hideSubMenuForMobile(submenuId);
//   } else {
//       showSubMenuForMobile(submenuId);
//   }
// }

// function showSubMenuForMobile(submenuId) {
//   var submenu1 = document.getElementById(submenuId + '-submenu');
//   submenu1.style.display = 'block';
// }

// function hideSubMenuForMobile(submenuId) {
//   var submenu1 = document.getElementById(submenuId + '-submenu');
//   submenu1.style.display = 'none';
// }
// ===========================================================================