import { useEffect, useState } from 'react';

const fetchUserName = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve('John Doe');
      } else {
        reject('Failed to fetch user name');
      }
    }, 2000);
  });
};

const App = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserName = async () => {
      try {
        const name = await fetchUserName();
        setUserName(name);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    getUserName();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userName && <p>User Name: {userName}</p>}
    </div>
  );
};

export default App;
