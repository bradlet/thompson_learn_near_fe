import type { ApiData } from '../pages/api/mockWeb3Api';

const DisplayStats = ({name}: ApiData) => {
    return (
        <div>Hello {name}</div>
    );
}

export default DisplayStats;