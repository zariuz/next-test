import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <a className="link">Главная</a>
      </Link>
      <Link href="/users">
        <a className="link">Пользователи</a>
      </Link>
      <h1>Главная страница</h1>

      <style jsx>{`
        .navbar {
          background-color: orange;
          padding: 15px;
        }
        .link {
          text-decoration: none;
          color: white;
          font-size: 20px;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
