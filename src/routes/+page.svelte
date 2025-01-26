<script>
    const asimovQuotes = [
        "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        "Never let your sense of morals prevent you from doing what is right.",
        "In life, unlike chess, the game continues after checkmate.",
        "Anti-intellectualism has been a constant thread winding its way through our political and cultural life.",
        "If my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster.",
        "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
        "Any planet is 'Earth' to those that live on it.",
        "Violence is the last refuge of the incompetent.",
        "The most exciting phrase to hear in science, the one that heralds the most discoveries, is not 'Eureka!' but 'That's funny...'",
        "Properly read, the Bible is the most potent force for atheism ever conceived.",
        "Self-education is, I firmly believe, the only kind of education there is.",
        "I write for the same reason I breathe - because if I didn't, I would die.",
        "I am an atheist, out and out.",
        "Those people who think they know everything are a great annoyance to those of us who do.",
        "If knowledge can create problems, it is not through ignorance that we can solve them.",
        "It is the obvious which is so difficult to see most of the time.",
        "Imagine the people who believe such things and who are not ashamed to ignore all the patient findings of thinking minds.",
        "The true discovery of America by mankind came when those first hunting bands crossed over from Siberia 25,000 years ago.",
        "There is no belief, however foolish, that will not gather its faithful adherents who will defend it to the death.",
        "The true measure of a man is what he would do if he knew he would never be caught.",
        "To be able to ask a question clearly is two-thirds of the way to getting it answered.",
        "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
        "The only thing that we know about the future is that it will be different.",
        "What we need are more people who specialize in the impossible.",
        "I do not fear computers. I fear lack of them.",
    ];
</script>

<section class=" text-center pt-32 px-8 max-w-3xl mx-auto">
    <h1 class="text-4xl lg:text-5xl font-extrabold mb-6">
        Quotes by Isaac Asimov
    </h1>
    <div class="opacity-90 mb-10 text-lg">
        Author of The Robot Series, Foundation and more
    </div>
</section>
<section class="pt-8 px-8 max-w-3xl mx-auto">
    <ul class="divide-y">
        {#each asimovQuotes as quote, index}
            <li class="py-5">
                <div class="flex flex-auto gap-10 items-baseline">
                    <span class="badge badge-lg badge-neutral font-bold"
                        >#{index + 1}</span
                    >
                    <div class="text-2xl">{quote}</div>
                </div>
            </li>
        {/each}
    </ul>
</section>

<section class=" text-center pt-8 px-8 max-w-3xl mx-auto text-2xl">
    Made by <a class="link link-accent" href="https://pavangudiwada.dev"
        >Pavan Gudiwada</a
    >
    <br />
    Inspired from
    <a class="link link-accent" href="https://naval25.com">naval25.com</a>
    by
    <a class="link link-accent" href="https://marclou.com">Marc Lou</a>
</section>
