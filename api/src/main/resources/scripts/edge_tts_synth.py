import sys
import asyncio
import edge_tts

async def main():
    if len(sys.argv) < 5:
        print("Usage: python3 edge_tts_synth.py <voice> <pitch> <text> <output_path>")
        sys.exit(1)

    voice = sys.argv[1]
    pitch = sys.argv[2]
    text = sys.argv[3]
    output_path = sys.argv[4]

    if not pitch or pitch == "0" or pitch == "default":
        communicate = edge_tts.Communicate(text, voice)
    else:
        communicate = edge_tts.Communicate(text, voice, pitch=pitch)

    await communicate.save(output_path)

if __name__ == '__main__':
    asyncio.run(main())
