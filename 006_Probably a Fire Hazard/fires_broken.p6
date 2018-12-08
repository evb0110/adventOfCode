constant @lines = "input.txt".IO.lines;
my @lights;

for @lines {
  say ++$;
  my $line = $_;
  $line ~~ s/ n\so /no/;
  my @instructions = $line.words;
  my $command = @instructions[0];

  my @from = numerify(@instructions[1]);
  my @to = numerify(@instructions[3]);
  for @from[0]..@to[0] -> $x {
    for @from[1]..@to[1] -> $y {
      switching( $command, $x, $y );
    }
  }
}

sub switching ($command, $x, $y) {
  my $lightString = stringify($x, $y);
  given $command {
    when "turnon" { @lights[$lightString] = 1 };
    when "turnoff" { @lights[$lightString] = 0 };
    when "toggle" { @lights[$lightString] = 1 - (@lights[$lightString] // 0) };
  }
}

sub numerify(Str $corner where $corner.contains(',')) {
  return $corner.split(',').map({+$_});
}
sub stringify(*@a where @a.elems == 2) {
  return +@a.join('');
}

say [+] @lights;
