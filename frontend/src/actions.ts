export const fetch_start_agent = async (
  // roomUrl: string | null,
  serverUrl: string,
  token: string
) => {
  const req = await fetch(`${serverUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Send the JWT token if available
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
    // body: JSON.stringify({ room_url: roomUrl }),
  });

  const data = await req.json();

  if (!req.ok) {
    return { error: true, detail: data.detail };
  }
  return data;
};
