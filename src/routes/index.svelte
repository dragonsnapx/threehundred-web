<script>

import DefaultSection from "../components/shared/DefaultSection.svelte";
import DateInfo from "../components/candidates/DateInfo.svelte";
import PollData from "../components/candidates/PollData.svelte";
</script>

<div>
  <h1 class="title"> 300.kr </h1>
  <p>
    선거이력, 여론조사, 후보등 대한민국의 선거와 관련된 모든 것. 잘못된 정보나 더하고 싶은 정보가 있으면 여기를 눌러주세요.
  </p>

  <div class="container-info">
    <DefaultSection title="선거까지">
      <DateInfo />
      <DateInfo />
    </DefaultSection>

    <DefaultSection title="최근 여론조사">
      <PollData />
    </DefaultSection>
  </div>
</div>

<style>
  .title{
      @apply text-3xl font-bold tracking-tight;
  }

  .container-info{
      @apply mt-5;
  }
</style>