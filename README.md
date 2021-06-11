Regular expressions are a set of symbols to find patterns in strings, it's not a programming language.
A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/. The last example includes parentheses, which are used as a memory device.
There are many different syntaxes for regular expressions, but in general you will see that:
Most characters stand for themselves
Certain characters, called metacharacters, have special meaning and must be escaped (usually with \ if you want to use them as characters. In most syntaxes the metacharacters are:
    (   )   [   ]  {   }   ^   $   .   \   ?   *   +   |
Within square brackets, you only have to escape (1) an initial ^, (2) a non-initial or non-final -, (3) a non-initial ], and (4) a \.
Many languages allow programmers to define regexes and then use them to:
Validate that a piece of text (or a portion of that text) matches some pattern
Find fragments of some text that match some pattern
Extract fragments of some text
Replace fragments of text with other text
Generally a regex is first compiled into some internal form that can be used for super fast validation, extraction, and replacing. Sometimes there is an explicit compile function or method, and sometimes special syntax is used to compile, such as the very common form /.../.

A modifier affects the way the rest of the regex is interpreted. Not every language supports all of the modifiers below. For example, JavaScript (officially) supports only i, g, and m.
Modifier		Meaning
g		global
i		ignore case
m		multiple line
s		single line (DOTALL): Means that the dot matches any character at all. Without this modifier, the dot matches any character except a newline.
x		ignore whitespace in the pattern
d		Unix line mode: Considers only U+000A as a line separator, rather than U+000D or the U+000D/U+000A combo or even U+2028.
u		Unicode case: in this mode the case-insensitive modifier respects Unicode cases; outside of this mode that modifier only consolidates cases of US-ASCII characters.

A regex engine always returns the leftmost match, even if a “better” match could be found later. When applying a regex to a string, the engine starts at the first character of the string. It tries all possible permutations of the regular expression at the first character.
