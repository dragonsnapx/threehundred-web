<script>
  import {goto} from '$app/navigation';
  import Title from "../components/forms/Title.svelte";
  import DefaultSection from "../components/shared/DefaultSection.svelte";
</script>
<div>
  <Title title="정보 등록 및 수정 요청" subtitle="요청은 최대 5-7일 소요될 수 있습니다." />

  <DefaultSection title="여론조사 등록">
    <div>
      <div class="url" on:click={() => goto('request/pollster')}> 여론조사 기관 등록 요청 </div>
      <div class="url" on:click={() => goto('request/poll')}> 여론조사 등록 및 수정 요청 </div>
      <div class="url" on:click={() => goto('request/poll-type')}> 선거 등록 </div>
    </div>
  </DefaultSection>

  <DefaultSection title="후보 관련 정보 등록 및 수정">
    <div>
      <div class="url"> 정당 등록 요청 </div>
      <div class="url"> 후보 및 인물 등록 요청 </div>
      <div class="url"> 후보 관련 정보 수정 요청 </div>
    </div>
  </DefaultSection>

  <DefaultSection title="기타 수정 요청">
    <div>
      <div class="url"> 기타 수정/피드백 요청 </div>
    </div>
  </DefaultSection>
</div>

<style>
  .url{
      @apply text-blue-400 underline font-semibold cursor-pointer flex-1;
  }
</style>
