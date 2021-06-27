<template>
  <div class="row ps-2 pe-2">
    <div class="col-12">
      <h1>Index</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque
        eaque eos cumque libero excepturi culpa! Corrupti quod repudiandae
        accusantium itaque laborum a aut officiis, numquam laudantium maiores
        cupiditate eaque?
      </p>
      <Reshens-block />
      <Napravs-block />
    </div>
  </div>
</template>

<script>
import ReshensBlock from '@/components/index/ReshensBlock'
import NapravsBlock from '@/components/index/NapravsBlock'
export default {
  components: {
    ReshensBlock,
    NapravsBlock
  }
}
</script>