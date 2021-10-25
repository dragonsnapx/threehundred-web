<script>
  import PercentBar from "../../components/candidates/PercentBar.svelte";
  import Ranking from "../../components/candidates/Ranking.svelte";
  import DefaultSection from "../../components/shared/DefaultSection.svelte";
  import DateInfo from "../../components/candidates/DateInfo.svelte";
  import Button from "../../components/forms/Button.svelte";
  import Answer from "../../components/candidates/Answer.svelte";
  import Percentage from "../../components/candidates/Percentage.svelte";
</script>

<div>
  <h1 class="title"> 김아무개 </h1>
  <p> 국민의당 경선 후보 </p>
  <div class="master-container">
    <div class="left-container">
      <img src="https://via.placeholder.com/800x600" />

      <div class="p-1 mt-2">
        <DefaultSection title="선거까지">
          <DateInfo />
          <DateInfo />
        </DefaultSection>

        <DefaultSection title="피드백" flexRow={false}>
          <Button label="여론조사 더하기" />
        </DefaultSection>
      </div>

    </div>

    <div class="right-container">

      <DefaultSection title="여론조사 - 국민의힘 경선">
        <Percentage percentage_num={34} percentage_delta={2} percentage_src="리얼미터"/>
        <Percentage percentage_num={31} percentage_delta={-5} percentage_src="PNR 여론조사"/>
      </DefaultSection>

      <DefaultSection title="여론조사 - 2022 대선">
        <Percentage percentage_num={34} percentage_delta={2} percentage_src="리얼미터"/>
        <Percentage percentage_num={31} percentage_delta={-5} percentage_src="PNR 여론조사"/>
      </DefaultSection>

      <DefaultSection title="최근 선거 이력">
      </DefaultSection>

      <DefaultSection title="Rankings">
        <Ranking ranking_num="9" ranking_src="US News" ranking_delta="-4"/>
        <Ranking ranking_num="25" ranking_src="QS World Rankings" ranking_delta="2"/>
        <Ranking ranking_num="8" ranking_src="WSJ" ranking_delta="0"/>
      </DefaultSection>

      <DefaultSection title="Acceptance Rates">
        <PercentBar percentage={12.5} caption="ED I" />
        <PercentBar percentage={7.5} caption="ED II" />
        <PercentBar percentage={4.9} caption="Regular Decision" />
      </DefaultSection>

      <DefaultSection title="Applying" flexRow={true}>
        <Button label="2021" />
        <Button label="2020" />
        <Button label="2019" />
      </DefaultSection>

    </div>
  </div>
</div>

<style>
    .title{
        @apply text-3xl font-bold tracking-tight;
    }

    .master-container{
        @apply flex mt-5;
    }

    .left-container{
        @apply w-1/4;
    }

    .right-container{
        @apply pl-6 pr-6;
    }
</style>