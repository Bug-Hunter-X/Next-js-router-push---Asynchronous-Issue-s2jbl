```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const routeChangeComplete = (url) => {
      if (url === '/another-page') {
        console.log('Navigation completed');
      }
    };
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.push('/another-page');
    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete);
    };
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```