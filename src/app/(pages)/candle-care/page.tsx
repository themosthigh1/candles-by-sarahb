import PagePlaceHolder from "@/components/PagePlaceHolder/PagePlaceHolder";
import PageTitle from "@/components/PageTitle/PageTitle";

const CandleCarePage = () => {
  return (
    <div>
      <PageTitle title={"Candle Care"} />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10">
        <h2 className="mb-10 font-medium text-lg">
          We want your Candles to give you joy and light while filling your
          space with beautiful aromatic notes that inspire love, creativity and
          relaxation. For the most effective way to do this, please follow our
          candle care tips below.
        </h2>
        <ul>
          <li className="mb-2">
            1. When lighting for the first time burn until wax melts across
            entire surface to the sides of vessel (this prevents tunneling, and
            creates an even burn for the duration of the candle’s ‘life’) This
            may take up to 2-4 hours.
          </li>
          <li className="mb-2">
            2. Trim wick to ¼ of an inch before each burn to promote an even
            burn, steady flame and limit sooting/mushrooming of wick.
          </li>
          <li className="mb-2">
            3. To preserve the fragrance, do not burn your candle more than 4
            hours at a time.
          </li>
          <li className="mb-2">
            4. Trim the candle wick after each burn. This is very important to
            prevent the candles from smoking on the next burn or from burning
            the sides of the glass. We recommend trimming them to 1/4th to 1/8th
            of an inch each time.  Invest in a good pair of wick trimmers that
            will cut and remove the excess wick cleanly.
          </li>
          <li className="mb-2">
            5. If soot ever forms on the inside of the vessel, extinguish
            candle, wait for it to cool, then wipe with a clean damp cloth. Trim
            wick and relight.
          </li>
          <li className="mb-2">
            6. Please keep the wax pool free of wick trimmings, matches and
            debris at all times.
          </li>
          <li className="mb-2">
            7. Extinguish candle with a snuffer, or dip wick into melted wax and
            then straighten wick to prevent smoking and also prevent hot wax
            from splattering. Do not blow out.
          </li>
          <li className="mb-2">
            8. Extinguish a candle if it smokes, flickers, or the flame becomes
            too high. These signs indicate the candle is not burning properly
            and the flame isnt controlled. Let the candle cool, trim the wick,
            then check for drafts before re-lighting.
          </li>
          <li className="mb-2">
            9. To maximize scent throw, burn in desired space for 30 mins with
            the door closed. Open windows and doors will disperse scent.
          </li>
          <li className="mb-2">
            10. Always store your candles in a cool, dark and dry place.  Avoid
            placing your candles where they will be directly exposed to sunlight
            or harsh indoor lighting.
          </li>
          <li className="mb-2">
            11. Remove dust and fingerprints from a candle by gently rubbing the
            surface with a piece of nylon or a soft cloth. The cloth can be dry
            or slightly dampened with water.
          </li>
          <li className="mb-2">
            12. Do not burn your candle all the way down.  Always leave at least
            ½ inch of non-molten wax at the bottom.
          </li>
          <li className="mb-2">13. Always burn candle within sight.</li>
        </ul>
      </div>
    </div>
  );
};

export default CandleCarePage;
