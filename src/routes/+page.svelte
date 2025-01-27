<script>
    let salaryPm = $state(1500);
    let numHours = $state(180);
    let perHour = $derived(salaryPm / numHours);
</script>

<section class=" text-center pt-32 px-8 max-w-3xl mx-auto">
    <h1 class="text-4xl lg:text-5xl font-extrabold mb-6">
        How Valuable is Your ⏳<span class="underline text-accent"> Time</span>?
    </h1>
    <div class="opacity-90 mb-5 text-lg">
        Calculate how much your time is worth based on your salary
    </div>
</section>

<section
    class="flex flex-col md:px-4 sm:px-8 p-6 gap-6 mx-auto max-w-5xl p-100 rounded md:flex-row lg:w-1/2"
>
    <!-- Left Column -->
    <div
        class=" w-1/2 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
    >
        <form id="timeCalculator">
            <label class="input input-bordered flex items-center gap-2 my-10">
                Salary($)/month
                <input
                    type="number"
                    class="grow input input-accent"
                    placeholder="1500"
                    bind:value={salaryPm}
                    min="100"
                    max="10000"
                />
            </label>

            <label class="input input-bordered flex items-center gap-2">
                Hours/month
                <input
                    type="number"
                    class="grow input input-accent"
                    placeholder="180"
                    bind:value={numHours}
                    min="10"
                    max="180"
                />
            </label>
        </form>
    </div>

    <!-- Right Column -->
    <div
        class="w-full p-2 rounded-lg shadow-lg text-white flex flex-col justify-center items-center md:md:w-1/2"
        id="calculatedValue"
    >
        <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
                <div
                    class="artboard artboard-demo phone-1 text-xl lg:text-3xl p-5 bg-white gap-1"
                >
                    {#if salaryPm > 100 && numHours > 10 && salaryPm < 100000}
                        <p>
                            Per-week: ${(perHour * 9 * 4).toFixed(2)}
                        </p>
                        <p>
                            Per-day: ${(perHour * 9).toFixed(2)}
                        </p>
                        <p>
                            Per-hour: ${perHour.toFixed(2)}
                        </p>
                        <p>
                            Per-minute: ${(perHour / 60).toFixed(2)}
                        </p>
                    {:else if salaryPm >= 100000}
                        <p>C'mon, enjoy life at this point 🍹</p>
                    {:else}
                        <p>Enter your 🤑</p>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<section class=" text-center pt-8 px-8 max-w-3xl mx-auto text-1xl">
    Made by <a class="link link-accent" href="https://pavangudiwada.dev"
        >Pavan Gudiwada</a
    >
    <br />
    Inspired from
    <a class="link link-accent" href="https://bookscalculator.com"
        >bookscalculator.com</a
    >
    by
    <a class="link link-accent" href="https://marclou.com">Marc Lou</a>
</section>
