my @lines = "input.txt".IO.lines;

sub nice ($line) {
  my $vowelish = $line ~~ m:g/ <[aeiou]> /;
  my $twice = $line ~~ m/ $<l>=\S $<l> /;
  my $prohib = $line ~~ m/ ab | cd | pq | xy /;
  return ($vowelish.elems >= 3 and $twice and !$prohib);
}

say @lines.grep(&nice).elems;