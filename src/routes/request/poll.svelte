<script>
	import TextBox from "../../components/forms/TextBox.svelte";
	import Title from "../../components/forms/Title.svelte";
	import SimpleDropdown from "../../components/forms/SimpleDropdown.svelte";
	import HelperText from "../../components/forms/HelperText.svelte";
	import Spacer from "../../components/forms/Spacer.svelte";
	import Button from "../../components/forms/Button.svelte";
</script>
<div>
  <Title title="여론조사 등록하기"  />
  <div class="form-title">
    <TextBox helperText="여론조사 이름 및 기관" hasMarginBottom={true}/>
    <div class="form-provider">
      <SimpleDropdown />
    </div>
  </div>
  <Spacer n="1" />
  <TextBox helperText="여론조사 URL" hasMarginBottom={true}/>
  <Spacer n="1" />
  <HelperText helperText="여론조사 타입" />
  <SimpleDropdown />
  <Spacer n="1" />
  <Button label="신청하기"/>
</div>

<style>
  .form-title{
      @apply flex;
  }

  .form-provider{
      @apply flex flex-col self-end ml-1;
  }
</style>
