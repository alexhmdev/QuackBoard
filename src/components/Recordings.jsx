import { useRecordings } from '../store/recordingsStore';
export const Recordings = () => {
  const { recordings } = useRecordings((state) => state);

  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Recordings</h2>
        {recordings.map((recording) => (
          <div
            key={JSON.stringify(recording.keysPressed)}
            className="flex items-center gap-2"
          >
            {recording.name}
          </div>
        ))}
      </div>
    </div>
  );
};
