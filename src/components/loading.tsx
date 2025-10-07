const Loading = ({ text, children, size }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={`showbox scale-${size ? size * 10 : 50}`}>
        <div className="gif-loader">
          <img
            src="/assets/123.gif"  // 修改为本地路径
            alt="Loading..."
            style={{
              width: size ? `${size}px` : "50px",
              height: size ? `${size}px` : "50px",
            }}
          />
        </div>
      </div>
      {/* 其余代码不变 */}
    </div>
  );
};
