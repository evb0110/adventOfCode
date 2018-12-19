constant @input = 'input.txt'.IO.lines;

constant @input_debracket = @input.map({
  my $debr = $_;
  $debr ~~ s:g/\[/A/;
  $debr ~~ s:g/\]/Z/;
  $debr;
});

my $sslregex = /
        [
          [^ | Z ]
          <-[A]> *
          $<first>=\S
          $<second>=\S
          $<first>
          [\S *]
          A
          [<-[Z]> *]
          $<second>
          $<first>
          $<second>
        ]
          |
        [
          A
          <-[Z]> *
          $<first>=\S
          $<second>=\S
          $<first>
          \S *
          $<second>
          $<first>
          $<second>
          <-[A]> *
          [ $ | A ]
        ]
/;
# say $sslregex;

# constant @result = @input_debracket.grep({say $sslregex});
# put @result;

my $counter = 0;
for @input_debracket -> $line {
  $counter++ if $line ~~ $sslregex;
}

put $counter;