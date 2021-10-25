<script>
  import TextBox from "../../components/forms/TextBox.svelte";
  import Title from "../../components/forms/Title.svelte";
</script>
<div>
  <Title title="여론조사 등록하기"  />
  <TextBox textHelper="여론조사 이름*" hasMarginBottom={true}/>
  <TextBox textHelper="여론조사 기관*" />
</div>