<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink></span>
      <span>|--|</span>
      <span> <RouterLink to="/jogadores">Lista</RouterLink> </span>
    <div>
    </div>  
    </div>
    <div class="menu-direito">
      <nav>
      </nav>
    </div>
  </header>
</template >
<style>
header span {
  padding: 0 20px;
}

header.menu-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>
