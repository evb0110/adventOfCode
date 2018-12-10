my @sizes = "input.txt".IO.slurp.lines;

my $total = 0;

for @sizes -> $size {
  my @dimensions = $size.split("x");
  $total += surface(|@dimensions);
}

say $total;

sub surface ($a, $b, $c) {
  my @sides = [ $a * $b, $a * $c, $b * $c ];
  my $surface = 2 * ([+] @sides) + @sides.min;
}

