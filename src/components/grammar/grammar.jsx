import React from 'react';
import "./grammar.scss";

export default class Grammar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="grammarComponent">
                <h1>Mando&#39;a Grammer Rules</h1><br />

                <h3>Nouns:</h3><br />
                <article>
                    Gender nouns are the same for men and women. Gender is implied contextually, if relevant.
                    Where gender clarity is necessary, the adjectives jagyc (male) or dalyc (female) are added.
                    There is no need to make verbs agree with subjects - there is one form only.
                    A prefix system indicates tenses. Colloquially, Mandalorians use only the present tense, but
                    they adopted the prefixes ru (past) and ven (future) when dealing with species who need
                    specific tenses. There is no passive form. All verbs are active. If needed, the passive is formed by using the
                    adjective and - if spoken in full - the verb cuyir.
                    The indefinite article eyn, (an) is almost always dropped except for emphasis, as is the
                    definite article te, or the more emphatic haar (the).<br /><br />

                    Plurals are formed by adding the suffix -e to the end of words that end in a consonant, and -se to words ending in a vowel.
                    For instance, vod becomes vod&#39;e, and aruetii becomes aruetii&#39;se. The &quot;e&quot; is always pronounced as &quot;ay&quot;,
                    and &quot;se&quot; is always pronounced &quot;say&quot;.
                </article>
                <br /><br />
                <hr />

                <h3>Verbs:</h3><br />
                <article>
                    The infinitive ends in -ir, -ar, -ur, -or or -er. Removing the &quot;r&quot; usually produces the stem.
                    Sometimes an apostrophe separates the terminal vowel, to indicate the slight glottal stop of
                    some Mandalorian accents. This apostrophe, known as a beten, or sigh-as in Mando&#39;a-can
                    also indicate breathing, pronunciation, or dropped letters.
                    Mando&#39;a is predominantly a spoken language, and contractions and pronunciation variations
                    occur just as in any language.<br /><br />

                    The verb cuyir (to be) is frequently dropped and indicated by word order, as in ni (cuyi) verd-I
                    (am) a warrior. To say &quot;It&#39;s good&quot;, a Mandalorian will often just say jate (good) rather than bic jate - it (is)
                    good - or the full form with the verb, bic cuyi jate.
                    The addition of the prefix tion turns a statement into a question.
                    The prefix ke or k&#39; indicates a command. Using ke with the infinitive is formal, but in everyday
                    colloquial use the verb loses its -r ending.<br /><br />

                    To create the negative form of a verb-or, in many cases, a noun- add
                    the prefix n&#39;, nu, nu&#39;, or even ne (depending on ease of pronunciation) before either the whole
                    sentence or the negative phrase, depending on meaning.
                    Pronunciation is always a key factor in determining which letters are dropped when spoken.
                    The negative prefix often denotes a negative noun, such as ne&#39;briikase (unhappy).<br /><br />

                    A summary of the verb forms, using jurir:<br />
                    Ni juri kad: I carry a saber.<br />
                    Nu&#39;ni juri kad: I don&#39;t carry a saber.<br />
                    Ni ven juri kad: I will carry a saber.<br />
                    Ni ru juri kad: I carried a saber.<br />
                    Ke jurir kad: Carry that saber! (Formal.)<br />
                    Ke&#39;nu jurir kad: Put that saber down! (Literally,
                    &quot;Don&#39;t carry that saber!&quot;)
                </article>
                <br /><br />
                <hr />

                <h3>Pronouns:</h3><br />
                <article>
                    As with nouns, pronouns have no gender. Some are also possessives, such as gar, kaysh and val.
                </article>
                <br /><br />
                <hr />

                <h3>Adjectives &amp; Adverbs:</h3><br />
                <article>
                    Adjectives and adverbs are formed by the addition of the suffix -la or -yc (pronounced eesh),
                    depending on which makes pronunciation easier. There is only one form of the adjective.
                    The adverb is exactly the same as the adjective.
                    Comparatives and superlatives tend to be constructed from adjectives with -shy&#39;a for the
                    comparative or -ne for the superlative.
                </article>
                <br /><br />
                <hr />

                <h3>Pronunciation:</h3><br />
                <article>
                    Mando&#39;a is pronounced much as Basic, with a few exceptions. There is no &quot;f,&quot; &quot;x,&quot; or &quot;z,&quot;
                    although some regions do pronounce &quot;p&quot; almost as ph and &quot;s&quot; as z. Those letters have been
                    added to the Mandalorian written alphabet to aid the transliteration of foreign words.
                    Occasionally, the pronunciation of &quot;t&quot;s and
                    &quot;d&quot;s are swapped. &quot;T&quot; is the modern form; &quot;d&quot; is archaic. &quot;V&quot; and &quot;w&quot; are also sometimes
                    interchangeable, as are &quot;b&quot; and &quot;v&quot;-another regional variation. &quot;J&quot; is now pronounced as a
                    hard &quot;j&quot; as in joy, but is still heard as &quot;y&quot; in some communities.
                    The initial &quot;h&quot; in a word is usually aspirated, except in its archaic form in some songs and
                    poems, and &quot;h&quot; is always pronounced when it occurs in the middle of a word.
                    The stress on syllables shown in the lexicon is as commonly spoken, but many Mandalorians
                    place stress on different syllables.<br /><br />

                    Other points to note:<br />
                    -uy: pronounced oo-ee<br />
                    u: oo<br />
                    cye: shay<br />
                    -yc: sh after a vowel<br />
                    c: k, when it comes before a at the beginning of a word<br />
                    c: s, when it comes before other vowels at the beginning of a word or in the middle of a word<br />
                    cy: sh or ch<br /><br />

                    Pronouncing terminal consonants varies in songs. They often become extra syllables. For
                    examples, tor becomes to-rah and tang becomes tan-gah to maintain rhythm and meter.
                </article>
            </section>
        );
    }
}