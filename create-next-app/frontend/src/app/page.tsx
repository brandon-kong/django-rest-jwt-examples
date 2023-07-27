async function getData() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js', {
        cache: 'no-cache',
    });

    const repo = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return repo;
}

export default async function Page() {
    const data = await getData();
    const b = data.stargazers_count;

    return <main>{b}</main>;
}
