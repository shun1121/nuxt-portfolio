<template>
  <div> 
    <span>document.write(new Date().getFullYear());</span>
  </div>
</template>

<script>
  export default {
    data: () => ({
      profiles: [
        {info: 'Shunsuke'},
        {info: 'from Mie'},
        {info: 'studying at Kwanseigakuin University'},
        {info: 'good at communicating in English'},
      ]
    }),
  }
</script>
