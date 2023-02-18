const OtherLayout = () => {
  return <div>다른 레이아웃을 사용</div>;
};

OtherLayout.getLayout = function getLayout(page: React.ReactNode) {
  return <div>{page}</div>;
};

export default OtherLayout;
