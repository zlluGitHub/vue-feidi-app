<template>
    <div>
         <HeadeBlack :title="'个人资料'"/>
         <Datum/>
    </div>
</template>
<script>
import Datum from "./Datum";
import HeadeBlack from "./HeadeBlack";
export default {
  name: "datum",
  components: {
    Datum,
    HeadeBlack
  }
};
</script>