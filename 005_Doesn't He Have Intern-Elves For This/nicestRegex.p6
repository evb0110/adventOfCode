constant @input = "input.txt".IO.lines;

constant $regex1 = rx/
  $<first>=[\S\S]
  \S *
  $<first>
/;

constant $regex2 = rx/
  $<first>=[\S]
  \S
  $<first>
/;

constant @output = @input.grep($regex1).grep($regex2);
say @output.elems;