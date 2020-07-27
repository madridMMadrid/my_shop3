<template>
  <div>
    <div class="l-container">
      <Slider />
      <FurnitureForPerson />
      <ArmchairsAndChairs />
      <SoftFurniture />
      <Description />
    </div>
  </div>
</template>
<script>
import Slider from "./MidleContent/ProductMap/Slider";
import FurnitureForPerson from "./MidleContent/ProductMap/FurnitureForPerson";
import ArmchairsAndChairs from "./MidleContent/ProductMap/ArmchairsAndChairs";
import SoftFurniture from "./MidleContent/ProductMap/SoftFurniture";
import Description from "./MidleContent/ProductMap/Description";

export default {
  components: {
    Slider,
    FurnitureForPerson,
    ArmchairsAndChairs,
    SoftFurniture,
    Description,
  },
};
</script>
