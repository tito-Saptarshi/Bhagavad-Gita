"use server";

interface Params {
  chapterId: number;
  slogId: number;
}

export async function fetchSlogs({ chapterId, slogId }: Params) {
  try {
    const slog = await fetch(
      `https://bhagavadgitaapi.in/slok/${chapterId}/${slogId}`
    );

    const data = await slog.json();
    // const author = data.raman.et;
    // console.log(author);
    // console.log(data.sans.author);
    return data;
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
}
