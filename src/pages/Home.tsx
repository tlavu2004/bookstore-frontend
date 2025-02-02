import DataFetcher from '../components/DataFetcher';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <DataFetcher />  {/* Hiển thị dữ liệu fetch từ backend */}
    </div>
  );
};

export default Home;
